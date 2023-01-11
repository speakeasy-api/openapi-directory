import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Boards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteV3BoardsBoardId - Delete a board
    **/
    deleteV3BoardsBoardId(req: operations.DeleteV3BoardsBoardIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV3BoardsBoardIdResponse>;
    /**
     * deleteV3BoardsBoardIdAssets - Remove assets from a board
    **/
    deleteV3BoardsBoardIdAssets(req: operations.DeleteV3BoardsBoardIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV3BoardsBoardIdAssetsResponse>;
    /**
     * deleteV3BoardsBoardIdAssetsAssetId - Remove an asset from a board
    **/
    deleteV3BoardsBoardIdAssetsAssetId(req: operations.DeleteV3BoardsBoardIdAssetsAssetIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV3BoardsBoardIdAssetsAssetIdResponse>;
    /**
     * deleteV3BoardsBoardIdCommentsCommentId - Delete a comment from a board
    **/
    deleteV3BoardsBoardIdCommentsCommentId(req: operations.DeleteV3BoardsBoardIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV3BoardsBoardIdCommentsCommentIdResponse>;
    /**
     * getV3Boards - Get all boards that the user participates in
    **/
    getV3Boards(req: operations.GetV3BoardsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3BoardsResponse>;
    /**
     * getV3BoardsBoardId - Get assets and metadata for a specific board
    **/
    getV3BoardsBoardId(req: operations.GetV3BoardsBoardIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV3BoardsBoardIdResponse>;
    /**
     * getV3BoardsBoardIdComments - Get comments from a board
    **/
    getV3BoardsBoardIdComments(req: operations.GetV3BoardsBoardIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3BoardsBoardIdCommentsResponse>;
    /**
     * postV3Boards - Create a new board
    **/
    postV3Boards(req: operations.PostV3BoardsRequest, config?: AxiosRequestConfig): Promise<operations.PostV3BoardsResponse>;
    /**
     * postV3BoardsBoardIdComments - Add a comment to a board
    **/
    postV3BoardsBoardIdComments(req: operations.PostV3BoardsBoardIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostV3BoardsBoardIdCommentsResponse>;
    /**
     * putV3BoardsBoardId - Update a board
    **/
    putV3BoardsBoardId(req: operations.PutV3BoardsBoardIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV3BoardsBoardIdResponse>;
    /**
     * putV3BoardsBoardIdAssets - Add assets to a board
    **/
    putV3BoardsBoardIdAssets(req: operations.PutV3BoardsBoardIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.PutV3BoardsBoardIdAssetsResponse>;
    /**
     * putV3BoardsBoardIdAssetsAssetId - Add an asset to a board
    **/
    putV3BoardsBoardIdAssetsAssetId(req: operations.PutV3BoardsBoardIdAssetsAssetIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV3BoardsBoardIdAssetsAssetIdResponse>;
}
