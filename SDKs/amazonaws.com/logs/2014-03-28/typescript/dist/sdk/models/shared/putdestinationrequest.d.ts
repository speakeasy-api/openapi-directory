import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutDestinationRequest extends SpeakeasyBase {
    destinationName: string;
    roleArn: string;
    tags?: Record<string, string>;
    targetArn: string;
}
