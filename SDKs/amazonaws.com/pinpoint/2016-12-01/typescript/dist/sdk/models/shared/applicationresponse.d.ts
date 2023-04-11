import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an application.
 */
export declare class ApplicationResponse extends SpeakeasyBase {
    arn: string;
    creationDate?: string;
    id: string;
    name: string;
    tags?: Record<string, string>;
}
