import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>
 */
export declare class HomeDirectoryMapEntry extends SpeakeasyBase {
    entry: string;
    target: string;
}
