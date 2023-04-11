import { SpeakeasyBase } from "../../../internal/utils";
import { MLModel } from "./mlmodel";
/**
 * Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
 */
export declare class DescribeMLModelsOutput extends SpeakeasyBase {
    nextToken?: string;
    results?: MLModel[];
}
