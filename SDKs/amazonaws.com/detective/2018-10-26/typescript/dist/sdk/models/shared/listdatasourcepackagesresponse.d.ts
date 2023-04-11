import { SpeakeasyBase } from "../../../internal/utils";
import { DatasourcePackageIngestDetail } from "./datasourcepackageingestdetail";
/**
 * Success
 */
export declare class ListDatasourcePackagesResponse extends SpeakeasyBase {
    datasourcePackages?: Record<string, DatasourcePackageIngestDetail>;
    nextToken?: string;
}
