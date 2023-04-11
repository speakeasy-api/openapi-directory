import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAnalysisStatusEnum } from "./runtimeanalysisstatusenum";
import { SrcCodeOrDbAnalysisStatusEnum } from "./srccodeordbanalysisstatusenum";
/**
 * A combination of existing analysis statuses.
 */
export declare class AnalysisStatusUnion extends SpeakeasyBase {
    runtimeAnalysisStatus?: RuntimeAnalysisStatusEnum;
    srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatusEnum;
}
