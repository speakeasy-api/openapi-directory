import { SpeakeasyBase } from "../../../internal/utils";
export declare class Author extends SpeakeasyBase {
    /**
     * Author full name
     */
    fullName: string;
    /**
     * Author id
     */
    id: number;
    /**
     * True if author has published items
     */
    isActive: boolean;
    /**
     * Author Orcid
     */
    orcidId: string;
    /**
     * Author url name
     */
    urlName: string;
}
