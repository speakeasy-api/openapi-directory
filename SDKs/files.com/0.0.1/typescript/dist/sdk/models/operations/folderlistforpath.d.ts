import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FolderListForPathRequest extends SpeakeasyBase {
    /**
     * Send cursor to resume an existing list from the point at which you left off.  Get a cursor from an existing list via the X-Files-Cursor-Next header or the X-Files-Cursor-Prev header.
     */
    cursor?: string;
    /**
     * If specified, will filter folders/files list by this string.  Wildcards of `*` and `?` are acceptable here.
     */
    filter?: string;
    /**
     * Path to operate on.
     */
    path: string;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.
     */
    previewSize?: string;
    /**
     * If `search_all` is `true`, provide the search string here.  Otherwise, this parameter acts like an alias of `filter`.
     */
    search?: string;
    /**
     * Search entire site?  If set, we will ignore the folder path provided and search the entire site.  This is the same API used by the search bar in the UI.  Search results are a best effort, not real time, and not guaranteed to match every file.  This field should only be used for ad-hoc (human) searching, and not as part of an automated process.
     */
    searchAll?: boolean;
    /**
     * Include file previews?
     */
    withPreviews?: boolean;
    /**
     * Include file priority color information?
     */
    withPriorityColor?: boolean;
}
export declare class FolderListForPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of Folders objects.
     */
    fileEntities?: shared.FileEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
