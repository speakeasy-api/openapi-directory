import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels uses the training dataset to create a test dataset with a temporary split of the training dataset.
 */
export declare class TestingData extends SpeakeasyBase {
    assets?: Asset[];
    autoCreate?: boolean;
}
