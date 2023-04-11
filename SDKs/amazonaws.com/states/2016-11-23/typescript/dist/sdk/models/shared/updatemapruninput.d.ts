import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMapRunInput extends SpeakeasyBase {
    mapRunArn: string;
    maxConcurrency?: number;
    toleratedFailureCount?: number;
    toleratedFailurePercentage?: number;
}
