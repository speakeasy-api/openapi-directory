import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
 */
export declare class UserResponsePhoto extends SpeakeasyBase {
    image1024x1024?: string;
    image128x128?: string;
    image21x21?: string;
    image27x27?: string;
    image36x36?: string;
    image60x60?: string;
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class UserResponse extends SpeakeasyBase {
    /**
     * The user's email address.
     */
    email?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
    /**
     * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
     */
    photo?: UserResponsePhoto;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * Workspaces and organizations this user may access.
     *
     * @remarks
     * Note\: The API will only return workspaces and organizations that also contain the authenticated user.
     */
    workspaces?: WorkspaceCompact[];
}
