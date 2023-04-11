import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
/**
 * <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>
 */
export declare class DatasetGroup extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    domain?: DomainEnum;
    failureReason?: string;
    kmsKeyArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    roleArn?: string;
    status?: string;
}
