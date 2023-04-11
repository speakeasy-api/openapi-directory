import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.
 */
export declare class FillMissingValues extends SpeakeasyBase {
    filledPath?: string;
    imputedPath: string;
    inputs: string[];
    name: string;
}
