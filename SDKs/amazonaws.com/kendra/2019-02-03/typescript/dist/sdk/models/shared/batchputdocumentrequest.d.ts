import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDocumentEnrichmentConfiguration } from "./customdocumentenrichmentconfiguration";
import { Document } from "./document";
export declare class BatchPutDocumentRequest extends SpeakeasyBase {
    customDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
    documents: Document[];
    indexId: string;
    roleArn?: string;
}
