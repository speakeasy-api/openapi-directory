import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceAttachmentToIndexFieldMapping } from "./confluenceattachmenttoindexfieldmapping";
/**
 * Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
 */
export declare class ConfluenceAttachmentConfiguration extends SpeakeasyBase {
    attachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[];
    crawlAttachments?: boolean;
}
