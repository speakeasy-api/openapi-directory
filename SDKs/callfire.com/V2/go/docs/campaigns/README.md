# Campaigns

### Available Operations

* [DeleteCampaignSound](#deletecampaignsound) - Delete a specific sound
* [FindCampaignSounds](#findcampaignsounds) - Find sounds
* [GetCampaignBatch](#getcampaignbatch) - Find a specific batch
* [GetCampaignSound](#getcampaignsound) - Find a specific sound
* [GetCampaignSoundDataMp3](#getcampaignsounddatamp3) - Download a MP3 sound
* [GetCampaignSoundDataWav](#getcampaignsounddatawav) - Download a WAV sound
* [PostCallCampaignSound](#postcallcampaignsound) - Add sound via call
* [PostFileCampaignSound](#postfilecampaignsound) - Add sound via file
* [PostTTSCampaignSound](#postttscampaignsound) - Add sound via text-to-speech
* [UpdateCampaignBatch](#updatecampaignbatch) - Update a batch

## DeleteCampaignSound

Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.DeleteCampaignSound(ctx, operations.DeleteCampaignSoundRequest{
        ID: 273542,
    }, operations.DeleteCampaignSoundSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindCampaignSounds

To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.FindCampaignSounds(ctx, operations.FindCampaignSoundsRequest{
        Fields: sdk.String("vel"),
        Filter: sdk.String("quod"),
        IncludeArchived: sdk.Bool(false),
        IncludePending: sdk.Bool(false),
        IncludeScrubbed: sdk.Bool(false),
        Limit: sdk.Int(885338),
        Offset: sdk.Int(185636),
    }, operations.FindCampaignSoundsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignSoundPage != nil {
        // handle response
    }
}
```

## GetCampaignBatch

Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.GetCampaignBatch(ctx, operations.GetCampaignBatchRequest{
        Fields: sdk.String("dolorum"),
        ID: 952792,
    }, operations.GetCampaignBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Batch != nil {
        // handle response
    }
}
```

## GetCampaignSound

Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.GetCampaignSound(ctx, operations.GetCampaignSoundRequest{
        Fields: sdk.String("esse"),
        ID: 687488,
    }, operations.GetCampaignSoundSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignSound != nil {
        // handle response
    }
}
```

## GetCampaignSoundDataMp3

Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.GetCampaignSoundDataMp3(ctx, operations.GetCampaignSoundDataMp3Request{
        ID: 483409,
    }, operations.GetCampaignSoundDataMp3Security{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCampaignSoundDataWav

Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.GetCampaignSoundDataWav(ctx, operations.GetCampaignSoundDataWavRequest{
        ID: 215507,
    }, operations.GetCampaignSoundDataWavSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostCallCampaignSound

Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.PostCallCampaignSound(ctx, operations.PostCallCampaignSoundRequest{
        CallCreateSound: &shared.CallCreateSound{
            Name: sdk.String("Saul Fay"),
            ToNumber: sdk.String("numquam"),
        },
        Fields: sdk.String("enim"),
    }, operations.PostCallCampaignSoundSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignSound != nil {
        // handle response
    }
}
```

## PostFileCampaignSound

Create a campaign sound file via a supplied .mp3 or .wav file

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.PostFileCampaignSound(ctx, operations.PostFileCampaignSoundRequest{
        RequestBody: operations.PostFileCampaignSoundRequestBody{
            File: operations.PostFileCampaignSoundRequestBodyFile{
                Content: []byte("dolorem"),
                File: "sapiente",
            },
            Name: sdk.String("Christian Balistreri"),
        },
        Fields: sdk.String("sed"),
    }, operations.PostFileCampaignSoundSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignSound != nil {
        // handle response
    }
}
```

## PostTTSCampaignSound

Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.PostTTSCampaignSound(ctx, operations.PostTTSCampaignSoundRequest{
        TextToSpeech: &shared.TextToSpeech{
            Message: sdk.String("vel"),
            Voice: shared.TextToSpeechVoiceEnumSpanish1.ToPointer(),
        },
        Fields: sdk.String("voluptas"),
    }, operations.PostTTSCampaignSoundSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignSound != nil {
        // handle response
    }
}
```

## UpdateCampaignBatch

Updates a single Batch instance, currently batch can only be turned "on/off"

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.UpdateCampaignBatch(ctx, operations.UpdateCampaignBatchRequest{
        BatchInput: &shared.BatchInput{
            BroadcastID: sdk.Int64(646265),
            Enabled: sdk.Bool(false),
            ID: sdk.Int64(463575),
            Name: sdk.String("Amber Dibbert"),
            Status: shared.BatchStatusEnumActive.ToPointer(),
        },
        ID: 747080,
    }, operations.UpdateCampaignBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
