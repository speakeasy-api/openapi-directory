import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains configuration information for the calculation.Kepler Post GA Tasks : https://sim.amazon.com/issues/ATHENA-39828
 */
export declare class StartCalculationExecutionRequestCalculationConfiguration extends SpeakeasyBase {
    codeBlock?: string;
}
export declare class StartCalculationExecutionRequest extends SpeakeasyBase {
    calculationConfiguration?: StartCalculationExecutionRequestCalculationConfiguration;
    clientRequestToken?: string;
    codeBlock?: string;
    description?: string;
    sessionId: string;
}
