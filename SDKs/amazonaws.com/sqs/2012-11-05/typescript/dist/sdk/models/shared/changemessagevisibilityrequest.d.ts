import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangeMessageVisibilityRequest extends SpeakeasyBase {
    queueUrl: string;
    receiptHandle: string;
    visibilityTimeout: number;
}
