import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutResourceConfigRequest extends SpeakeasyBase {
    configuration: string;
    resourceId: string;
    resourceName?: string;
    resourceType: string;
    schemaVersionId: string;
    tags?: Record<string, string>;
}
