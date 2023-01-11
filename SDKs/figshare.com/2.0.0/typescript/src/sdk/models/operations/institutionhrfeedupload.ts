import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InstitutionHrfeedUploadRequestBodyHrfeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=hrfeed" })
  hrfeed: string;
}


export class InstitutionHrfeedUploadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  hrfeed?: InstitutionHrfeedUploadRequestBodyHrfeed;
}


export class InstitutionHrfeedUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class InstitutionHrfeedUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: InstitutionHrfeedUploadRequestBody;

  @SpeakeasyMetadata()
  security: InstitutionHrfeedUploadSecurity;
}


export class InstitutionHrfeedUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  responseMessage?: shared.ResponseMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
