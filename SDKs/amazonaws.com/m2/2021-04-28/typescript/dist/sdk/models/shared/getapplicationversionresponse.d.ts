import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionLifecycleEnum } from "./applicationversionlifecycleenum";
/**
 * Success
 */
export declare class GetApplicationVersionResponse extends SpeakeasyBase {
    applicationVersion: number;
    creationTime: Date;
    definitionContent: string;
    description?: string;
    name: string;
    status: ApplicationVersionLifecycleEnum;
    statusReason?: string;
}
