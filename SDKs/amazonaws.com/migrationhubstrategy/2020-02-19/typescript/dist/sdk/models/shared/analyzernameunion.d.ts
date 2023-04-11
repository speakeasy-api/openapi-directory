import { SpeakeasyBase } from "../../../internal/utils";
import { BinaryAnalyzerNameEnum } from "./binaryanalyzernameenum";
import { RunTimeAnalyzerNameEnum } from "./runtimeanalyzernameenum";
import { SourceCodeAnalyzerNameEnum } from "./sourcecodeanalyzernameenum";
/**
 * The combination of the existing analyzers.
 */
export declare class AnalyzerNameUnion extends SpeakeasyBase {
    binaryAnalyzerName?: BinaryAnalyzerNameEnum;
    runTimeAnalyzerName?: RunTimeAnalyzerNameEnum;
    sourceCodeAnalyzerName?: SourceCodeAnalyzerNameEnum;
}
