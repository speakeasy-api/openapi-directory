import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderChangeReportingV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderChangeExecutionUUID" })
  orderChangeExecutionUUID: string;
}


export class GetOrderChangeReportingV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderChangeReportingV3PathParams;
}


export class GetOrderChangeReportingV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeOrderReporting?: shared.ChangeOrderReporting;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}
