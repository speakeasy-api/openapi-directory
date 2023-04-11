import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseResource } from "./databaseresource";
import { DataCellsFilterResource } from "./datacellsfilterresource";
import { DataLocationResource } from "./datalocationresource";
import { LFTagKeyResource } from "./lftagkeyresource";
import { LFTagPolicyResource } from "./lftagpolicyresource";
import { TableResource } from "./tableresource";
import { TableWithColumnsResource } from "./tablewithcolumnsresource";
/**
 * A structure for the resource.
 */
export declare class Resource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: DataCellsFilterResource;
    dataLocation?: DataLocationResource;
    database?: DatabaseResource;
    lfTag?: LFTagKeyResource;
    lfTagPolicy?: LFTagPolicyResource;
    table?: TableResource;
    tableWithColumns?: TableWithColumnsResource;
}
