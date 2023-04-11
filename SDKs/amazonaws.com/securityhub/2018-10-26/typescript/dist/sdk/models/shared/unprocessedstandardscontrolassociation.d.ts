import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsControlAssociationId } from "./standardscontrolassociationid";
import { UnprocessedErrorCodeEnum } from "./unprocessederrorcodeenum";
/**
 *  Provides details about which control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details about why the request was unprocessed.
 */
export declare class UnprocessedStandardsControlAssociation extends SpeakeasyBase {
    errorCode: UnprocessedErrorCodeEnum;
    errorReason?: string;
    standardsControlAssociationId: StandardsControlAssociationId;
}
