import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * <p>Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.</p> <p>The <code>AutoImportPolicy</code> is supported only for Amazon FSx for Lustre file systems with the <code>Persistent_2</code> deployment type.</p>
 */
export declare class AutoImportPolicy extends SpeakeasyBase {
    events?: EventTypeEnum[];
}
