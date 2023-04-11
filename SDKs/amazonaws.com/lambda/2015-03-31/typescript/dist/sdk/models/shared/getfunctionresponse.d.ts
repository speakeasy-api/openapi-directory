import { SpeakeasyBase } from "../../../internal/utils";
import { Concurrency } from "./concurrency";
import { FunctionCodeLocation } from "./functioncodelocation";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * Success
 */
export declare class GetFunctionResponse extends SpeakeasyBase {
    code?: FunctionCodeLocation;
    concurrency?: Concurrency;
    configuration?: FunctionConfiguration;
    tags?: Record<string, string>;
}
