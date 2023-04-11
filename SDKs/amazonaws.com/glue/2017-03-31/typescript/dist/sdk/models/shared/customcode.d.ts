import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.
 */
export declare class CustomCode extends SpeakeasyBase {
    className: string;
    code: string;
    inputs: string[];
    name: string;
    outputSchemas?: GlueSchema[];
}
