import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationStatusEnum } from "./cancellationstatusenum";
/**
 * Success
 */
export declare class CancelQuantumTaskResponse extends SpeakeasyBase {
    cancellationStatus: CancellationStatusEnum;
    quantumTaskArn: string;
}
