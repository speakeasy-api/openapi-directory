import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// ChangeOrderReporting
/** 
 * The reporting related to a change order operation
**/
export class ChangeOrderReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrderType" })
  changeOrderType?: string;

  @SpeakeasyMetadata({ data: "json, name=creationUtcDate" })
  creationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=executionUUID" })
  executionUUID?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceUserId" })
  sourceUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUserName" })
  sourceUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=testMode" })
  testMode?: boolean;
}
