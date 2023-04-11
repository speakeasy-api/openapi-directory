import { SpeakeasyBase } from "../../../internal/utils";
import { AutoExportPolicy } from "./autoexportpolicy";
import { AutoImportPolicy } from "./autoimportpolicy";
/**
 * <p>The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an <code>AutoImportPolicy</code> that defines which file events on the data repository are automatically imported to the file system and an <code>AutoExportPolicy</code> that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.</p> <note> <p>Data repository associations on Amazon File Cache don't use <code>S3DataRepositoryConfiguration</code> because they don't support automatic import or automatic export.</p> </note>
 */
export declare class S3DataRepositoryConfiguration extends SpeakeasyBase {
    autoExportPolicy?: AutoExportPolicy;
    autoImportPolicy?: AutoImportPolicy;
}
