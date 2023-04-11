import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsControlAssociationDetail } from "./standardscontrolassociationdetail";
import { UnprocessedStandardsControlAssociation } from "./unprocessedstandardscontrolassociation";
/**
 * Success
 */
export declare class BatchGetStandardsControlAssociationsResponse extends SpeakeasyBase {
    standardsControlAssociationDetails: StandardsControlAssociationDetail[];
    unprocessedAssociations?: UnprocessedStandardsControlAssociation[];
}
