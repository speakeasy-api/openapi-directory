import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingUnrotateRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnrotateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnrotateRequestBodyImageFile;
}


export class PreprocessingUnrotateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnrotateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnrotateRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingUnrotateSecurity;
}


export class PreprocessingUnrotateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preprocessingUnrotate200ApplicationJSONByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotate200ApplicationXMLByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotate200TextJSONByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotate200TextXMLByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
