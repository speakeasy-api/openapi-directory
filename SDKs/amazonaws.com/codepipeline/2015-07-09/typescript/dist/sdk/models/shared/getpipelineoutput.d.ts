import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { PipelineMetadata } from "./pipelinemetadata";
/**
 * Represents the output of a <code>GetPipeline</code> action.
 */
export declare class GetPipelineOutput extends SpeakeasyBase {
    metadata?: PipelineMetadata;
    pipeline?: PipelineDeclaration;
}
