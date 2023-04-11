import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { StorageDescriptor } from "./storagedescriptor";
import { TableIdentifier } from "./tableidentifier";
/**
 * Represents a collection of related data organized in columns and rows.
 */
export declare class Table extends SpeakeasyBase {
    catalogId?: string;
    createTime?: Date;
    createdBy?: string;
    databaseName?: string;
    description?: string;
    isRegisteredWithLakeFormation?: boolean;
    lastAccessTime?: Date;
    lastAnalyzedTime?: Date;
    name: string;
    owner?: string;
    parameters?: Record<string, string>;
    partitionKeys?: Column[];
    retention?: number;
    storageDescriptor?: StorageDescriptor;
    tableType?: string;
    targetTable?: TableIdentifier;
    updateTime?: Date;
    versionId?: string;
    viewExpandedText?: string;
    viewOriginalText?: string;
}
