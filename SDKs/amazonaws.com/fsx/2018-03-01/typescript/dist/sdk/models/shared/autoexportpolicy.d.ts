import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * <p>Describes a data repository association's automatic export policy. The <code>AutoExportPolicy</code> defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.</p> <p>This <code>AutoExportPolicy</code> is supported only for Amazon FSx for Lustre file systems with the <code>Persistent_2</code> deployment type.</p>
 */
export declare class AutoExportPolicy extends SpeakeasyBase {
    events?: EventTypeEnum[];
}
