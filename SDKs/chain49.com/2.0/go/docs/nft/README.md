# Nft

## Overview

 

### Available Operations

* [GetNFTMetaV2](#getnftmetav2) - Get NFT metadata V2

## GetNFTMetaV2

Only works on Ethereum-like blockchains (currently ethereum and bsc)

Get metadata like name or description for a specified contract and token ID.
The resulting data contains a link which can then be used to request the IPFS link for the actual image to display in a block explorer for example.

Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Nft.GetNFTMetaV2(ctx, operations.GetNFTMetaV2Request{
        Blockchain: "ethereum",
        NftContract: "0x05756b07725dA0101813475333f372a844789Dc2",
        NftTokenID: "22",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNFTMetaV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
