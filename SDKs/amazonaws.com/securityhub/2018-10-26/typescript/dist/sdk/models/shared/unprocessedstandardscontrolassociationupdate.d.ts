import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsControlAssociationUpdate } from "./standardscontrolassociationupdate";
import { UnprocessedErrorCodeEnum } from "./unprocessederrorcodeenum";
/**
 * Provides details about which control's enablement status could not be updated in a specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides details about why the request was unprocessed.
 */
export declare class UnprocessedStandardsControlAssociationUpdate extends SpeakeasyBase {
    errorCode: UnprocessedErrorCodeEnum;
    errorReason?: string;
    standardsControlAssociationUpdate: StandardsControlAssociationUpdate;
}
