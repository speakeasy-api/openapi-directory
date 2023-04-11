import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateContextRequest extends SpeakeasyBase {
    contextName: string;
    description?: string;
    properties?: Record<string, string>;
    propertiesToRemove?: string[];
}
