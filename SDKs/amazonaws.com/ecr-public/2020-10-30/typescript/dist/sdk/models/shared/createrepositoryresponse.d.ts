import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
import { RepositoryCatalogData } from "./repositorycatalogdata";
/**
 * Success
 */
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    /**
     * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
     */
    catalogData?: RepositoryCatalogData;
    repository?: Repository;
}
