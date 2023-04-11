import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationCollectionFilter } from "./cloudformationcollectionfilter";
import { TagCollectionFilter } from "./tagcollectionfilter";
/**
 *  Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru.
 */
export declare class ResourceCollectionFilter extends SpeakeasyBase {
    cloudFormation?: CloudFormationCollectionFilter;
    tags?: TagCollectionFilter[];
}
