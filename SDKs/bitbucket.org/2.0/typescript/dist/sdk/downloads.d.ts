import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Downloads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRepositoriesWorkspaceRepoSlugDownloadsFilename - Deletes the specified download artifact from the repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugDownloadsFilename(req: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDownloads - Returns a list of download links associated with the repository.
    **/
    getRepositoriesWorkspaceRepoSlugDownloads(req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDownloadsFilename - Return a redirect to the contents of a download artifact.
     *
     * This endpoint returns the actual file contents and not the artifact's
     * metadata.
     *
     *     $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
     *     Hello World
    **/
    getRepositoriesWorkspaceRepoSlugDownloadsFilename(req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugDownloads - Upload new download artifacts.
     *
     * To upload files, perform a `multipart/form-data` POST containing one
     * or more `files` fields:
     *
     *     $ echo Hello World > hello.txt
     *     $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
     *
     * When a file is uploaded with the same name as an existing artifact,
     * then the existing file will be replaced.
    **/
    postRepositoriesWorkspaceRepoSlugDownloads(req: operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse>;
}
