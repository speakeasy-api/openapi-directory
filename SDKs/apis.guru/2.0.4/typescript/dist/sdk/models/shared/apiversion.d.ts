import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiVersion extends SpeakeasyBase {
    /**
     * Timestamp when the version was added
     */
    added: Date;
    /**
     * Copy of `externalDocs` section from OpenAPI definition
     */
    externalDocs?: Record<string, any>;
    /**
     * Copy of `info` section from OpenAPI definition
     */
    info: Record<string, any>;
    /**
     * The value of the `openapi` or `swagger` property of the source definition
     */
    openapiVer: string;
    /**
     * URL to OpenAPI definition in JSON format
     */
    swaggerUrl: string;
    /**
     * URL to OpenAPI definition in YAML format
     */
    swaggerYamlUrl: string;
    /**
     * Timestamp when the version was updated
     */
    updated: Date;
}
