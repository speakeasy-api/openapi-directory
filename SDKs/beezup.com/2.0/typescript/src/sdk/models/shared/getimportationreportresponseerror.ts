import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImportationReportResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnName" })
  beezUPColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode: string;

  @SpeakeasyMetadata({ data: "json, name=productCount" })
  productCount: number;

  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
