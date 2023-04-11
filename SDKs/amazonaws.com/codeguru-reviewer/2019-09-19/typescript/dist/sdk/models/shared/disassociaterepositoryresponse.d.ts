import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryAssociation } from "./repositoryassociation";
/**
 * Success
 */
export declare class DisassociateRepositoryResponse extends SpeakeasyBase {
    repositoryAssociation?: RepositoryAssociation;
    tags?: Record<string, string>;
}
