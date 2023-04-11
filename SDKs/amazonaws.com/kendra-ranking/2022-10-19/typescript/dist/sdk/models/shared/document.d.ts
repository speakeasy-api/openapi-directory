import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a document from a search service such as OpenSearch (self managed). Amazon Kendra Intelligent Ranking uses this information to rank and score on.
 */
export declare class Document extends SpeakeasyBase {
    body?: string;
    groupId?: string;
    id: string;
    originalScore: number;
    title?: string;
    tokenizedBody?: string[];
    tokenizedTitle?: string[];
}
