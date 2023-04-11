import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audience for the doc.
 */
export declare enum ConnectorDocAudienceEnum {
    ApplicationOwner = "application_owner",
    Consumer = "consumer"
}
/**
 * Format of the doc.
 */
export declare enum ConnectorDocFormatEnum {
    Markdown = "markdown"
}
export declare class ConnectorDoc extends SpeakeasyBase {
    /**
     * Audience for the doc.
     */
    audience?: ConnectorDocAudienceEnum;
    /**
     * Format of the doc.
     */
    format?: ConnectorDocFormatEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Name of the doc.
     */
    name?: string;
    /**
     * Link to fetch the content of the doc.
     */
    url?: string;
}
