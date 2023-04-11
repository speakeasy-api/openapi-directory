import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationCollection } from "./cloudformationcollection";
import { TagCollection } from "./tagcollection";
/**
 *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 */
export declare class ResourceCollection extends SpeakeasyBase {
    cloudFormation?: CloudFormationCollection;
    tags?: TagCollection[];
}
