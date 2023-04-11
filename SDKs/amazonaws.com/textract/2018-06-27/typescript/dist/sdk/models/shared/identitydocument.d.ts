import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { IdentityDocumentField } from "./identitydocumentfield";
/**
 * The structure that lists each document processed in an AnalyzeID operation.
 */
export declare class IdentityDocument extends SpeakeasyBase {
    blocks?: Block[];
    documentIndex?: number;
    identityDocumentFields?: IdentityDocumentField[];
}
