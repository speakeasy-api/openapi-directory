import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationDescription } from "./associationdescription";
import { FailedCreateAssociation } from "./failedcreateassociation";
/**
 * Success
 */
export declare class CreateAssociationBatchResult extends SpeakeasyBase {
    failed?: FailedCreateAssociation[];
    successful?: AssociationDescription[];
}
