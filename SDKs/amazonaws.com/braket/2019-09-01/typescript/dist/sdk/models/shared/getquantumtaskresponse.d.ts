import { SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";
/**
 * Success
 */
export declare class GetQuantumTaskResponse extends SpeakeasyBase {
    createdAt: Date;
    deviceArn: string;
    deviceParameters: string;
    endedAt?: Date;
    failureReason?: string;
    jobArn?: string;
    outputS3Bucket: string;
    outputS3Directory: string;
    quantumTaskArn: string;
    shots: number;
    status: QuantumTaskStatusEnum;
    tags?: Record<string, string>;
}
