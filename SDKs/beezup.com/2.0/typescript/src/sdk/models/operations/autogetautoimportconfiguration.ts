import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AutoGetAutoImportConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class AutoGetAutoImportConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AutoGetAutoImportConfigurationPathParams;
}


export class AutoGetAutoImportConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autoImportConfiguration?: shared.AutoImportConfiguration;
}
